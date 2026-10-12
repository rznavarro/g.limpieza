import { useState, useMemo } from 'react';
import { QUOTE_ITEMS, SANTIAGO_COMUNAS } from '../data/servicesData.ts';
import { formatCLP, buildWhatsAppLink } from '../utils/formatters.ts';

interface QuoteSelection {
  [itemId: string]: number; // quantity or sqm
}

export default function QuoteBuilder() {
  const [quantities, setQuantities] = useState<QuoteSelection>({});
  const [selectedComuna, setSelectedComuna] = useState('');
  const [customComuna, setCustomComuna] = useState('');
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Group items
  const tapicesItems = useMemo(
    () => QUOTE_ITEMS.filter((item) => item.category === 'tapices'),
    []
  );

  const inmueblesItems = useMemo(
    () => QUOTE_ITEMS.filter((item) => item.category === 'inmuebles'),
    []
  );

  const handleUnitChange = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: next };
    });
  };

  const handleSqmChange = (id: string, val: string) => {
    const parsed = parseFloat(val);
    setQuantities((prev) => {
      if (isNaN(parsed) || parsed <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: Math.min(2000, parsed) };
    });
  };

  // Calculate pricing per item with dynamic tier for alfombra muro a muro
  const calculatedItems = useMemo(() => {
    return QUOTE_ITEMS.map((item) => {
      const qty = quantities[item.id] || 0;
      let effectiveUnitPrice = item.price;
      let tierNote = '';

      if (item.id === 'alfombra_muro') {
        if (qty >= 30) {
          effectiveUnitPrice = 3500;
          tierNote = 'Tarifa preferente ≥ 30 m² ($3.500/m²)';
        } else if (qty > 0) {
          effectiveUnitPrice = 5000;
          tierNote = 'Tarifa estándar < 30 m² ($5.000/m²)';
        }
      }

      const lineTotal = qty * effectiveUnitPrice;

      return {
        ...item,
        qty,
        effectiveUnitPrice,
        tierNote,
        lineTotal,
      };
    });
  }, [quantities]);

  const activeLines = useMemo(
    () => calculatedItems.filter((item) => item.qty > 0),
    [calculatedItems]
  );

  const subtotal = useMemo(
    () => activeLines.reduce((acc, curr) => acc + curr.lineTotal, 0),
    [activeLines]
  );

  const MIN_ORDER = 30000;
  const isMinimumMet = subtotal >= MIN_ORDER;
  const amountShort = Math.max(0, MIN_ORDER - subtotal);

  const finalComuna = selectedComuna === 'Otra' || !selectedComuna ? (customComuna.trim() || 'Por definir') : selectedComuna;

  // WhatsApp Message Generator
  const whatsappUrl = useMemo(() => {
    if (!isMinimumMet) return '#';

    const itemsSummary = activeLines
      .map((line) => {
        const unitSuffix = line.type === 'sqm' ? `${line.qty} m²` : `${line.qty} ${line.qty === 1 ? line.unitLabel : line.unitLabel + 's'}`;
        return `• ${line.name} (${unitSuffix}) = ${formatCLP(line.lineTotal)}`;
      })
      .join('\n');

    const message = `Hola Grupo Limpieza, quiero agendar:
${itemsSummary}

Total referencial: ${formatCLP(subtotal)} + IVA.
Comuna: ${finalComuna}.`;

    return buildWhatsAppLink(message);
  }, [activeLines, subtotal, isMinimumMet, finalComuna]);

  const handleClear = () => {
    setQuantities({});
  };

  return (
    <section
      id="cotizador"
      aria-label="Cotizador de servicios para hogar y empresas"
      className="bg-[#eef0ec] text-[#0d1114] py-20 sm:py-28 md:py-36 border-b border-[#0d1114]/15 relative"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#0d1114]/15">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#9aa19c]">
                04 / COTIZADOR INTERACTIVO
              </span>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#d7ff45] text-[#0d1114]">
                PRECIOS TRANSPARENTES
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#0d1114]">
              Arma tu pedido y te confirmamos por WhatsApp.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#0d1114]/80">
              Precios reales, sin sorpresas. Sin recargo por distancia en la Provincia de Santiago.
            </p>
          </div>
          {activeLines.length > 0 && (
            <button
              onClick={handleClear}
              className="mt-4 md:mt-0 text-xs font-mono font-semibold uppercase text-[#9aa19c] hover:text-[#0d1114] underline self-start md:self-auto cursor-pointer"
            >
              Limpiar selección
            </button>
          )}
        </div>

        {/* 2-Column layout: Catalog List (Left 8 cols) & Sticky Cart Summary (Right 4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Catalog Rows */}
          <div className="lg:col-span-8 space-y-12">
            {/* Group 1: Tapices del hogar */}
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-[#0d1114]">
                <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-[#0d1114]">
                  Tapices del Hogar (con espuma y vapor)
                </h3>
                <span className="text-[11px] font-mono text-[#9aa19c] hidden sm:inline">
                  Por unidad
                </span>
              </div>

              <div className="divide-y divide-[#0d1114]/10 border-b border-[#0d1114]/10">
                {tapicesItems.map((item) => {
                  const qty = quantities[item.id] || 0;
                  const isActive = qty > 0;

                  return (
                    <div
                      key={item.id}
                      className={`row-sweep py-4 sm:py-5 px-3 sm:px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all relative ${
                        isActive ? 'border-l-4 border-l-[#1aa6c8] bg-white/40' : ''
                      }`}
                    >
                      <div className="flex-1">
                        <div className="font-display font-bold text-base sm:text-lg uppercase text-[#0d1114]">
                          {item.name}
                        </div>
                        <div className="text-xs text-[#9aa19c] mt-0.5 font-mono">
                          {formatCLP(item.price)} por {item.unitLabel}
                        </div>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center justify-between sm:justify-end gap-6">
                        <div className="font-mono font-bold text-sm sm:text-base tabular-nums text-right min-w-[90px]">
                          {qty > 0 ? formatCLP(qty * item.price) : '—'}
                        </div>

                        <div className="flex items-center border border-[#0d1114]/20 rounded-full bg-white/70 overflow-hidden shadow-xs">
                          <button
                            type="button"
                            onClick={() => handleUnitChange(item.id, -1)}
                            disabled={qty === 0}
                            className="w-10 h-10 flex items-center justify-center text-base font-bold hover:bg-[#0d1114] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-inherit transition-colors cursor-pointer"
                            aria-label={`Disminuir ${item.name}`}
                          >
                            −
                          </button>
                          <span className="w-10 text-center font-mono font-bold text-sm tabular-nums">
                            {qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleUnitChange(item.id, 1)}
                            className="w-10 h-10 flex items-center justify-center text-base font-bold hover:bg-[#0d1114] hover:text-white transition-colors cursor-pointer"
                            aria-label={`Aumentar ${item.name}`}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Group 2: Casas, Oficinas y Edificios */}
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-[#0d1114]">
                <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-[#0d1114]">
                  Casas, Oficinas y Edificios (todo con vapor)
                </h3>
                <span className="text-[11px] font-mono text-[#9aa19c] hidden sm:inline">
                  Unidades y Metros Cuadrados
                </span>
              </div>

              <div className="divide-y divide-[#0d1114]/10 border-b border-[#0d1114]/10">
                {inmueblesItems.map((item) => {
                  const qty = quantities[item.id] || 0;
                  const isActive = qty > 0;
                  const calculated = calculatedItems.find((c) => c.id === item.id);
                  const effectivePrice = calculated ? calculated.effectiveUnitPrice : item.price;
                  const lineTotal = calculated ? calculated.lineTotal : 0;

                  return (
                    <div
                      key={item.id}
                      className={`row-sweep py-4 sm:py-5 px-3 sm:px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all relative ${
                        isActive ? 'border-l-4 border-l-[#1aa6c8] bg-white/40' : ''
                      }`}
                    >
                      <div className="flex-1">
                        <div className="font-display font-bold text-base sm:text-lg uppercase text-[#0d1114]">
                          {item.name}
                        </div>
                        <div className="text-xs text-[#9aa19c] mt-0.5 font-mono">
                          {item.variableRateNote ? (
                            <span className="text-[#0d1114] font-medium">
                              {item.variableRateNote}
                            </span>
                          ) : (
                            `${formatCLP(item.price)} por ${item.unitLabel}`
                          )}
                        </div>

                        {/* Tier indicator for alfombra muro a muro */}
                        {item.id === 'alfombra_muro' && calculated?.tierNote && (
                          <div className="mt-1 text-[11px] font-mono text-[#1aa6c8] font-bold">
                            ✓ {calculated.tierNote}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-6">
                        <div className="font-mono font-bold text-sm sm:text-base tabular-nums text-right min-w-[90px]">
                          {qty > 0 ? formatCLP(lineTotal) : '—'}
                        </div>

                        {item.type === 'unit' ? (
                          <div className="flex items-center border border-[#0d1114]/20 rounded-full bg-white/70 overflow-hidden shadow-xs">
                            <button
                              type="button"
                              onClick={() => handleUnitChange(item.id, -1)}
                              disabled={qty === 0}
                              className="w-10 h-10 flex items-center justify-center text-base font-bold hover:bg-[#0d1114] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-inherit transition-colors cursor-pointer"
                              aria-label={`Disminuir ${item.name}`}
                            >
                              −
                            </button>
                            <span className="w-10 text-center font-mono font-bold text-sm tabular-nums">
                              {qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleUnitChange(item.id, 1)}
                              className="w-10 h-10 flex items-center justify-center text-base font-bold hover:bg-[#0d1114] hover:text-white transition-colors cursor-pointer"
                              aria-label={`Aumentar ${item.name}`}
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <div className="relative">
                              <input
                                type="number"
                                min="0"
                                max="1000"
                                step="1"
                                value={qty > 0 ? qty : ''}
                                onChange={(e) => handleSqmChange(item.id, e.target.value)}
                                placeholder="0"
                                className="w-20 px-3 py-2 text-right font-mono font-bold text-sm border border-[#0d1114]/30 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#1aa6c8] tabular-nums"
                                aria-label={`Metros cuadrados para ${item.name}`}
                              />
                            </div>
                            <span className="text-xs font-mono font-semibold text-[#9aa19c]">
                              m²
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sticky Summary Card (Desktop) */}
          <div className="lg:col-span-4 sticky top-28 bg-[#0d1114] text-[#eef0ec] rounded-sm p-6 sm:p-8 shadow-2xl border border-[#0d1114]">
            <div className="flex items-center justify-between pb-4 border-b border-[#eef0ec]/15">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#9aa19c]">
                Resumen de Pedido
              </span>
              <span className="text-xs font-mono text-[#d7ff45]">
                {activeLines.length} {activeLines.length === 1 ? 'ítem' : 'ítems'}
              </span>
            </div>

            {/* Selected items list */}
            <div className="my-6 max-h-56 overflow-y-auto space-y-3 pr-1 text-xs">
              {activeLines.length === 0 ? (
                <div className="py-8 text-center text-[#9aa19c] font-normal leading-relaxed">
                  Aún no has agregado servicios. Selecciona las cantidades arriba para armar tu cotización.
                </div>
              ) : (
                activeLines.map((line) => (
                  <div key={line.id} className="flex justify-between items-start gap-2 pb-2 border-b border-[#eef0ec]/5">
                    <div>
                      <div className="font-medium text-[#eef0ec]">{line.name}</div>
                      <div className="text-[#9aa19c] font-mono text-[11px]">
                        {line.type === 'sqm' ? `${line.qty} m²` : `${line.qty} un.`} × {formatCLP(line.effectiveUnitPrice)}
                      </div>
                    </div>
                    <div className="font-mono font-bold text-[#eef0ec] tabular-nums">
                      {formatCLP(line.lineTotal)}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Comuna Selector */}
            <div className="mb-6 pt-4 border-t border-[#eef0ec]/15">
              <label htmlFor="comuna-select" className="block text-xs font-mono uppercase tracking-wider text-[#9aa19c] mb-2">
                Tu Comuna en Santiago:
              </label>
              <select
                id="comuna-select"
                value={selectedComuna}
                onChange={(e) => setSelectedComuna(e.target.value)}
                className="w-full px-3 py-2.5 rounded-sm bg-[#0f1316] border border-[#eef0ec]/20 text-xs text-[#eef0ec] focus:outline-none focus:border-[#1aa6c8]"
              >
                <option value="">Selecciona tu comuna (RM)</option>
                {SANTIAGO_COMUNAS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
                <option value="Otra">Otra comuna / Fuera de Prov. Stgo</option>
              </select>

              {(selectedComuna === 'Otra' || !selectedComuna) && (
                <input
                  type="text"
                  placeholder="Escribe tu comuna o sector..."
                  value={customComuna}
                  onChange={(e) => setCustomComuna(e.target.value)}
                  className="w-full mt-2 px-3 py-2 rounded-sm bg-[#0f1316] border border-[#eef0ec]/20 text-xs text-[#eef0ec] placeholder-[#9aa19c]/60 focus:outline-none focus:border-[#1aa6c8]"
                />
              )}
            </div>

            {/* Subtotal */}
            <div className="pt-4 border-t border-[#eef0ec]/15">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-mono uppercase text-[#9aa19c]">
                  Total Referencial
                </span>
                <div className="text-right">
                  <div className="font-display font-black text-3xl sm:text-4xl text-[#d7ff45] tracking-tight tabular-nums transition-all">
                    {formatCLP(subtotal)}
                  </div>
                  <span className="text-[10px] font-mono text-[#9aa19c] block mt-0.5">
                    Precios no incluyen IVA
                  </span>
                </div>
              </div>

              {/* Minimum Order Alert ($30.000) */}
              {!isMinimumMet && (
                <div className="mt-4 p-3 rounded-xs bg-[#eef0ec]/10 border border-[#d7ff45]/40 text-xs text-[#eef0ec] leading-relaxed">
                  <span className="font-bold text-[#d7ff45]">Pedido mínimo: $30.000.</span>{' '}
                  {subtotal > 0 ? (
                    <>Te faltan <span className="font-mono font-bold text-[#d7ff45]">{formatCLP(amountShort)}</span> para completar el mínimo.</>
                  ) : (
                    <>Agrega servicios por al menos $30.000 para habilitar el envío.</>
                  )}
                </div>
              )}

              {/* WhatsApp Action Button */}
              <div className="mt-6">
                <a
                  href={isMinimumMet ? whatsappUrl : undefined}
                  target={isMinimumMet ? '_blank' : undefined}
                  rel={isMinimumMet ? 'noopener noreferrer' : undefined}
                  aria-disabled={!isMinimumMet}
                  className={`btn-sweep w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full font-bold text-xs uppercase tracking-wider transition-all min-h-[48px] ${
                    isMinimumMet
                      ? 'bg-[#1aa6c8] text-white hover:opacity-90 cursor-pointer shadow-lg'
                      : 'bg-[#eef0ec]/10 text-[#9aa19c] cursor-not-allowed opacity-60'
                  }`}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 2C6.496 2 2 6.505 2 12.049c0 1.942.556 3.754 1.516 5.289L2 22l4.838-1.464c1.472.87 3.183 1.365 4.993 1.365 5.535 0 10.031-4.505 10.031-10.049C21.862 6.505 17.566 2 12.031 2zm0 18.258c-1.59 0-3.092-.44-4.388-1.206l-.315-.187-2.87.868.877-2.793-.205-.327a8.214 8.214 0 01-1.267-4.364c0-4.538 3.693-8.231 8.231-8.231 4.538 0 8.231 3.693 8.231 8.231 0 4.538-3.693 8.231-8.231 8.231z" />
                  </svg>
                  <span>Enviar pedido por WhatsApp ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
