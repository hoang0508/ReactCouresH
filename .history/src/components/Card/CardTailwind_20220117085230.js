import React from "react";

const CardTailwind = () => {
  return (
    <div>
      <div className="relative">
        <div className="w-full rounded-lg h-[400px]">
          <img
            src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1200x900"
            alt=""
            className="block w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="card-content">
          <div className="card-top">
            <div className="card-user">
              <img
                className="user-avatar"
                src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1200x900"
                alt=""
              />
              <span className="user-name">@zndrson</span>
            </div>
            <div>256</div>
          </div>
          <div className="card-footer">
            <h3 className="card-title">Cosmic Perspective</h3>
            <span className="card-amount">12,000 PSL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTailwind;
