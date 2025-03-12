import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {

    const state = {
        series: [
            {
                name: 'Orders',
                data: [30, 40, 50, 55, 60, 55, 70, 80, 90, 100, 95, 85]
            },
            {
                name: 'Revenue',
                data: [50, 60, 70, 75, 80, 75, 90, 100, 110, 120, 115]
            },
            {
                name: 'Seller',
                data: [20, 30, 40, 45, 50, 45, 60, 70, 80, 90, 85, 75]
            }
        ],
        options: {
            chart: {
                type: 'line',
                height: '100%',
                width: '100%',
                stacked: false,
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false
                }
            },
            colors: ['#28B4E9', '#59168A', '#fdbf22'],
            dataLabels: {
                enabled: false
            },
            grid: {
                show: true,
                borderColor: '#f3f3f3',
                row: {
                    colors: ['#f3f3f3', 'transparent'], // Alternating row colors
                    opacity: 0.5
                },
            },
            yaxis: {
                title: {
                    text: 'Market Sales',
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            responsive: [
                {
                    breakpoint: 1024, // Tablets & below
                    options: {
                        chart: {
                            height: 300
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                },
                {
                    breakpoint: 768, // Mobile devices
                    options: {
                        chart: {
                            height: 300
                        },
                        xaxis: {
                            labels: {
                                rotate: -45
                            }
                        }
                    }
                },
                {
                    breakpoint: 480, // Small screens
                    options: {
                        chart: {
                            height: 300
                        },
                        xaxis: {
                            labels: {
                                show: false // Hides labels for better mobile UX
                            }
                        }
                    }
                }
            ]
        },
    };
    


    return (
        <div className="px-4 md:pr-[30px] md:pl-[19px] py-2 lg:mt-0"> 
         <div className="lg:hidden flex-col gap-2 ml-2 mb-4">
                <h1 className='text-xl lg:block font-bold text-black'>Hello!! Wisdom</h1>
                <p className='text-sm font-normal text-[#505153] leading-3'>Welcome back!</p>
            </div> 
            <div className="md:hidden w-full mb-4">
                <div className='flex justify-center items-center shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] pl-3 rounded-xl bg-[#ffffff] border border-[#92a2ac] overflow-hidden'>
                    <span className="material-symbols-rounded text-black">search</span>
                    <input className="px-2 w-full  text-black rounded-xl py-2 outline-none " type="text" name='search' placeholder='Search...' />
                </div>
            </div>
            <div className="w-full grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 gap-2">
                <div className="flex justify-between items-center lg:p-5 px-5 py-5 bg-gradient-to-r from-[#4483f8] to-[#b8d4fe] shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] hover:bg-[#b0cffe] rounded-xl gap-3">
                    <div className="flex flex-col justify-start items-start">
                        <h2 className="lg:text-2xl text-[20px] font-bold text-white">$3434</h2>
                        <span className="text-md  font-normal text-white">Total Sales</span>
                    </div>
                <div className="w-[40px] h-[40px] rounded-full bg-[#4483f8]  flex justify-center items-center text-xl  ">
                    <span className="material-symbols-rounded text-white font-bold">paid</span>
                </div>
                </div>

                <div className="flex justify-between items-center lg:p-5 px-5 py-5 shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] bg-gradient-to-r from-[#08b0e8] to-[#94dff8] hover:bg-[#94e1fb] rounded-xl gap-3">
                    <div className="flex flex-col justify-start items-start">
                        <h2 className="lg:text-2xl text-[20px] font-bold text-white">$3434</h2>
                        <span className="text-md  font-normal text-white">Orders</span>
                    </div>
                <div className="w-[40px] h-[40px] rounded-full bg-[#08b0e8] flex justify-center items-center text-xl  ">
                    <span className="material-symbols-rounded text-white">shopping_cart</span>
                </div>
                </div>

                <div className="flex justify-between items-center lg:p-5 px-5 py-5 shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] bg-gradient-to-r from-[#7938b2] to-[#b167f3] hover:bg-[#f8bcb1] rounded-xl gap-3">
                    <div className="flex flex-col justify-start items-start ">
                        <h2 className="lg:text-2xl  text-[20px] font-bold text-white">20</h2>
                        <span className="text-md font-normal text-white">Products</span>
                    </div>
                <div className="w-[40px] h-[40px] rounded-full  bg-[#7938b2] flex justify-center items-center text-xl  ">
                    <span className="material-symbols-rounded text-white">add_shopping_cart</span>
                </div>
                </div>

                <div className="flex justify-between items-center lg:p-5 px-5 py-5 shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] bg-gradient-to-r from-[#edb62b] to-[#f6e49e] hover:bg-[#fff2c0] rounded-xl gap-3">
                    <div className="flex flex-col justify-start items-start">
                        <h2 className="lg:text-2xl text-[20px] font-bold text-white">50</h2>
                        <span className="text-md  font-normal text-white">Sellers</span>
                    </div>
                <div className="w-[40px] h-[40px] rounded-full bg-[#fdbf22] flex justify-center items-center text-xl  ">
                    <span className="material-symbols-rounded text-white ">groups</span>
                </div>
                </div>
            
            </div>

            <div className="flex flex-wrap mt-7 w-full">
                <div className="w-full lg:w-7/12 lg:pr-3">
                <div className="w-full bg-[#ffffff] rounded-xl p-4">
                    <Chart options={state.options} series={state.series} type='bar' height={350} />
                </div>


                </div>
            <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
                <div className="w-full bg-[#ffffff] rounded-xl p-4 text-[#D0D2D6]">
                    <div className="flex justify-between items-center">
                        <h2 className="text-sm font-bold text-black">Recent Seller Message</h2>
                        <Link className="text-md font-normal text-black">View All</Link>
                    </div>

                    <div className="flex flex-col gap-2 pt-6">
                        <ol>
                            <li className=' flex gap-1 items-center mb-3'>
                                <div className='flex mb-8 shadow-lg w-9 h-8 p-[6px] bg-[#4483f8]  justify-center items-center rounded-full z-10'>
                                    <img className='w-full h-full rounded-full shadow-lg' src="/src/assets/icons8-facebook (2).svg" alt="" />
                                </div>
                                    <div className="p-2 w-full bg-purple-800   rounded-xl shadow-sm">
                                    <div className="flex justify-between items-center mb-2 ">
                                        <Link className='text-sm font-normal text-white'>Admin</Link>
                                        <time className='mb-1 text-[12px] font-normal sm:order-last sm:mb-0 text-white'>2 day ago</time>
                                    </div>
                                    <div className="p-2 text-[11px] text-black font-normal bg-purple-100 rounded-xl border-slate-800">
                                        How Are You?
                                    </div>
                                    </div>
                            </li>
                            <li className=' flex gap-1 items-center mb-3'>
                                <div className='flex mb-8 shadow-lg w-9 h-8 p-[6px] bg-[#4483f8]  justify-center items-center rounded-full z-10'>
                                    <img className='w-full h-full rounded-full shadow-lg' src="/src/assets/icons8-facebook (2).svg" alt="" />
                                </div>
                                    <div className="p-2 w-full bg-purple-800   rounded-xl shadow-sm">
                                    <div className="flex justify-between items-center mb-2 ">
                                        <Link className='text-sm font-normal text-white'>Admin</Link>
                                        <time className='mb-1 text-[12px] font-normal sm:order-last sm:mb-0 text-white'>2 day ago</time>
                                    </div>
                                    <div className="p-2 text-[11px] text-black font-normal bg-purple-100 rounded-xl border-slate-800">
                                        How Are You?
                                    </div>
                                    </div>
                            </li>
                            <li className=' flex gap-1 items-center mb-3'>
                                <div className='flex mb-8 shadow-lg w-9 h-8 p-[6px] bg-[#4483f8]  justify-center items-center rounded-full z-10'>
                                    <img className='w-full h-full rounded-full shadow-lg' src="/src/assets/icons8-facebook (2).svg" alt="" />
                                </div>
                                    <div className="p-2 w-full bg-purple-800   rounded-xl shadow-sm">
                                    <div className="flex justify-between items-center mb-2 ">
                                        <Link className='text-sm font-normal text-white'>Admin</Link>
                                        <time className='mb-1 text-[12px] font-normal sm:order-last sm:mb-0 text-white'>2 day ago</time>
                                    </div>
                                    <div className="p-2 text-[11px] text-black font-normal bg-purple-100 rounded-xl border-slate-800">
                                        How Are You?
                                    </div>
                                    </div>
                            </li>

                        </ol>
                    </div>
                   
                </div>
            </div>
            </div>


           
        </div>
    );
};

export default AdminDashboard;