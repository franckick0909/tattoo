export function ButtonAnimatedBorder({btnText}) {
    return (
        <button className="relative inline-flex overflow-hidden rounded-sm p-px">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[3px] bg-neutral-950 px-6 py-3 text-sm font-medium text-gray-50 backdrop-blur-3xl">
          {btnText}
        </span>
      </button>
    );
  }
  