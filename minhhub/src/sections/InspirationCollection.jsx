import MinhPray from '../assets/MinhPray.png';
import MinhShop from '../assets/Minhshop.png';
import MinhFit from '../assets/MinhFit.png';



const InspirationCollectionSection = () => {
  	return (
    		<div className="w-full relative flex flex-col items-start justify-start text-center text-[32px] text-font-color font-montserrat">
      			<div className="self-stretch flex flex-col items-center justify-center pt-[60px] px-2.5 pb-0">
        				<div className="flex flex-col items-center justify-start gap-[35px]">
          					<b className="self-stretch relative">Inspiration Collection</b>
          					<div className="self-stretch relative text-[20px] text-font-color1 inline-block h-[30px] shrink-0">Minhs work, inspired by books, wellness, and simplicity, makes life easier.</div>
        				</div>
      			</div>
      			<div className="self-stretch flex flex-col items-center justify-center py-[60px] px-2.5">
        				<div className="w-[1151px] flex flex-row items-center justify-start gap-[43px]">
          					<img className="w-[355px] relative rounded-tl-41xl rounded-tr-none rounded-b-none h-[434px] object-cover" alt="" src={MinhPray} />
          					<img className="w-[355px] relative h-[434px] object-cover" alt="" src={MinhShop} />
          					<img className="w-[355px] relative rounded-t-none rounded-br-41xl rounded-bl-none h-[434px] object-cover" alt="" src={MinhFit} />
        				</div>
      			</div>
    		</div>);
};

export default InspirationCollectionSection;
