<div
  className={`p-5 rounded-sm text-left ${
    image?.adVarient?.title
      ? `${image.adVarient.background}
   ${image.adVarient.color}
    `
      : "bg-none text-white "
  } bg-opacity-25 absolute top-[46%] ${
    isNoneMobile
      ? "left-[10%] right-auto mx-auto max-w-[unset]"
      : "left-0 right-0 mx-auto max-w-[240px]"
  }`}
>
  <h1> {image?.adVarient?.title}</h1>
  <button className={`btn btn-${image.adVarient.button}`}>
    {image?.adVarient?.buyNow}
  </button>
</div>;
