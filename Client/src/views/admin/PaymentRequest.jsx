import { FixedSizeList as List } from "react-window";
import { forwardRef } from "react";
import PropTypes from 'prop-types';

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
      className="flex text-black font-bold rounded-xl uppercase text-xs sm:text-sm items-center border-b border-gray-200"
    >
      <div className="w-1/5 p-2 text-center">{index + 1}</div>
      <div className="w-1/5 p-2 text-center">$300</div>
      <div className="w-1/5 p-2 text-center">
        <span className="py-1 px-2 bg-[#f5f7f9] rounded-xl text-xs sm:text-sm">
          Pending
        </span>
      </div>
      <div className="w-1/5 p-2 text-center">17 March 2025</div>
      <div className="w-1/5 p-2 text-center">
        <button className="bg-purple-200 hover:bg-purple-300 px-4 py-1 cursor-pointer text-purple-900 rounded-xl text-xs sm:text-sm">
          View
        </button>
      </div>
    </div>
  );

  return (
    <div className="sm:px-4 lg:px-8">
        <div className="w-full hidden lg:flex justify-between items-center text-purple-900 mb-2 ">
          <h1 className="text-xl font-bold">Payment Requests</h1>
        </div>
      <div className="bg-white p-4 rounded-xl w-full">
        <h2 className="text-lg sm:text-xl font-bold pb-3 text-center sm:text-left">
          Withdrawal Request
        </h2>
        
        <div className="w-full overflow-x-auto">
          {/* Table Headers */}
          <div className="hidden sm:flex text-white rounded-xl mb-2 font-bold bg-purple-900 uppercase text-[12px] sm:text-[14px] border-b border-gray-300">
            <div className="w-1/5 p-2 text-center">No</div>
            <div className="w-1/5 p-2 text-center">Amount</div>
            <div className="w-1/5 p-2 text-center">Status</div>
            <div className="w-1/5 p-2 text-center">Date</div>
            <div className="w-1/5 p-2 text-center">Action</div>
          </div>

          {/* Mobile List View */}
          <div className="sm:hidden">
            {array.map((_, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm mb-4">
                <p><strong>No:</strong> {index + 1}</p>
                <p><strong>Amount:</strong> $300</p>
                <p><strong>Status:</strong> <span className="py-1 px-2 bg-[#f5f7f9] rounded-lg">Pending</span></p>
                <p><strong>Date:</strong> 17 March 2025</p>
                <button className="bg-purple-200 hover:bg-purple-300 px-4 py-2 mt-2 cursor-pointer text-purple-900 rounded-xl text-sm">
                  View
                </button>
              </div>
            ))}
          </div>

          {/* Desktop Virtualized List */}
          <div className="hidden sm:block">
            <List
              style={{ width: "100%" }}
              className="List"
              height={300}
              itemCount={array.length}
              itemSize={50}
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
