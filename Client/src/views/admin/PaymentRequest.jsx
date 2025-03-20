import { FixedSizeList as List } from "react-window";
import { forwardRef } from "react";
import { PropTypes } from 'prop-types';

function handleOnWheel(event) {
  event.stopPropagation(); // Prevent unwanted scrolling behavior
}

const outerElementType = forwardRef((props, ref) => (
    <div ref={ref} onWheel={handleOnWheel} {...props} />
  ));
  
  outerElementType.displayName = 'OuterElementType';

const PaymentRequest = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const Row = ({ index, style }) => (
    <div
      style={style}
      className="flex text-black font-bold rounded-xl uppercase text-xs min-w-[340px] items-center"
    >
      <div className="w-[25%] p-2 whitespace-nowrap">{index + 1}</div>
      <div className="w-[25%] p-2 whitespace-nowrap">$300</div>
      <div className="w-[25%] p-2 whitespace-nowrap">
        <span className="py-[1px] px-[5px] bg-[#f5f7f9] rounded-xl text-xs">
          Pending
        </span>
      </div>
      <div className="w-[25%] p-2 whitespace-nowrap">17 March 2025</div>
      <div className="w-[25%] p-2 whitespace-nowrap">
        <button className="bg-purple-200 hover:shadow-purple-200/50 hover:bg-purple-300 px-4 py-1 cursor-pointer text-purple-900 rounded-xl text-sm">
          View
        </button>
      </div>
    </div>
  );



  return (
    <div className="lg:px-4 lg:pl-4 lg:pr-8">
      <div className="bg-white p-4 rounded-xl w-full">
        <h2 className="text-xl font-bold pb-3">Withdrawal Request</h2>
        <div className="w-full">
          <div className="w-full overflow-x-auto">
            <div className="flex text-[#9ca2ac] font-bold rounded-xl uppercase text-[14px] min-w-[340px]">
              <div className="w-[25%] p-2">No</div>
              <div className="w-[25%] p-2">Amount</div>
              <div className="w-[25%] p-2">Status</div>
              <div className="w-[25%] p-2">Date</div>
              <div className="w-[25%] p-2">Action</div>
            </div>

            <List
              style={{ minWidth: "340px" }}
              className="List"
              height={300}
              itemCount={array.length}
              itemSize={40}
              outerElementType={outerElementType}
            >
              {Row}
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};

PaymentRequest.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default PaymentRequest;
