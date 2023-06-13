import './style2.css';

function LinearProgressBar({ percent, fontSize }) {
  return (
    <div className="mainProgressBarDiv">
      <span  className="percentage bg-slate-500 rounded-full text-white w-[50px] h-[50px] flex justify-center items-center" style={{ fontSize:"20px",position:"absolute",bottom:"20px",left:`${percent-1}%` }}>
        {percent}%
      </span>
      <div className="emptyProgressBar" style={{ width: '100%' }}>
        <div
          className="fillingProgressBar"
          style={{
            left: `${percent - 100}%`,
            transition: '3s'
          }}
        />
      </div>
    </div>
  );
}

export default LinearProgressBar;
