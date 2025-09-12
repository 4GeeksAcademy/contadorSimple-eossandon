import '../../styles/index.css'


function Counter (props){
  const { digitOne} = props
  return (
    <div className='container'>
      <div className="target "><i class="fa-solid fa-clock"></i></div>
      <div className="target ">{Math.floor((digitOne / 100000) % 10)}</div>
      <div className="target ">{Math.floor((digitOne / 10000) % 10)}</div>
      <div className="target ">{Math.floor((digitOne / 1000) % 10)}</div>
      <div className="target ">{Math.floor((digitOne / 100) % 10)}</div>
      <div className="target ">{Math.floor((digitOne / 10) % 10)}</div>
      <div className="target ">{(digitOne / 1 )% 10}</div>
    </div>
  );
};
export default Counter

