export default function Ticker() {
  const items = [
    'SILLONES',
    'COLCHONES',
    'ALFOMBRAS',
    'SILLAS',
    'TAPIZ DE AUTOS',
    'LAVADO DE MOTOR',
    'BAÑOS',
    'COCINAS',
    'PISOS FLOTANTES',
    'PULIDO Y SIMONIZADO',
    'A DOMICILIO EN TODA LA RM',
  ];

  return (
    <div
      className="relative w-full overflow-hidden py-4 sm:py-6 bg-[#0d1114] select-none"
      aria-label="Resumen de servicios"
    >
      {/* Rotated ribbon container */}
      <div
        className="w-[106%] -ml-[3%] bg-[#d7ff45] text-[#0d1114] py-3 sm:py-4 shadow-lg transform -rotate-[1.2deg] ticker-wrapper overflow-hidden"
      >
        <div className="ticker-track">
          {/* Loop twice for smooth infinite marquee */}
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              className="flex items-center shrink-0 space-x-6 sm:space-x-8 px-4"
              aria-hidden={copyIndex === 1}
            >
              {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-6 sm:space-x-8">
                  <span className="font-display font-black text-lg sm:text-2xl md:text-3xl tracking-tight uppercase whitespace-nowrap">
                    {item}
                  </span>
                  <span
                    className="font-light text-base sm:text-2xl text-[#0d1114]/60 font-mono select-none"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
