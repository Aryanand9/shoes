import type { NextPage } from "next";

const Desktop1: NextPage = () => {
  return (
    <div className="relative bg-whitesmoke w-full h-[1024px] overflow-hidden text-left text-xl text-black font-inter">
      <b className="absolute top-[79px] left-[308px] inline-block w-[295px] h-[69px]">
        MEN
      </b>
      <b className="absolute top-[79px] left-[406px] inline-block w-[295px] h-[69px]">
        WOMEN
      </b>
      <b className="absolute top-[79px] left-[538px] inline-block w-[295px] h-[69px]">
        SALES
      </b>
      <b className="absolute top-[79px] left-[665px] inline-block w-[295px] h-[69px]">
        SNEKARS
      </b>
      <img
        className="absolute h-[2.81%] w-[7.25%] top-[7.71%] right-[86.77%] bottom-[89.47%] left-[5.97%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <b className="absolute top-[333px] left-[138px] text-45xl inline-block w-[481px] h-[88px]">
        Nike Air Max
      </b>
      <div className="absolute top-[462px] left-[152px] text-[96px] font-light text-orangered inline-block w-[435px] h-[111px]">
        Lebagh
      </div>
      <div className="absolute top-[731px] left-[152px] text-45xl font-light text-gray inline-block w-[241px] h-[111px]">
        $135
      </div>
      <img
        className="absolute top-[723.35px] left-[402.18px] rounded-[30px] w-[298.14px] h-[105.32px]"
        alt=""
        src="/rectangle-1.svg"
      />
      <i className="absolute top-[739px] left-[438px] text-[36px] inline-block font-light w-[241px] h-[111px]">
        Add To Card
      </i>
      <div className="absolute top-[724px] left-[499px] w-[100px] h-[100px] overflow-hidden" />
      <i className="absolute top-[600px] left-[152px] text-[24px] inline-block font-medium w-[540px] h-[290px]">
        Something should be there to sale this Item. So please Add Description
        for this Item.Thank You
      </i>
    </div>
  );
};

export default Desktop1;
