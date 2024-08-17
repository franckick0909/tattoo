export const BtnTop = ({btn}) => {
    return (
      <button className="group/button relative overflow-hidden  border-amber-100 border-[0.5px] bg-transparent px-8 py-3 text-sm md:text-base font-medium text-white transition-all duration-150 hover:border-amber-500 active:scale-95">
        <span className="absolute bottom-0 left-0 z-0 h-0 w-full bg-gradient-to-t from-black/80 to-amber-500/50 transition-all duration-500 group-hover/button:h-full" />
        <span className="relative z-10 transition-all duration-500 group-hover/button:text-white uppercase">
          {btn}
        </span>
      </button>
    )
  }