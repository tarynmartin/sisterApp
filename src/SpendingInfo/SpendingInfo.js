import React from "react";
import { Link } from "react-router-dom";
import './SpendingInfo.css';

function SpendingInfo({setAnswer}) {
  return (
    <article className="spending-info">
      <h1 className="spending-info-title">Which statement best
describes your spending over the last 3 months?</h1>
    <form>
      <input type="radio" value="much-less" id="much-less"
        onChange={(e) => setAnswer(e.target.value)} />
      <label htmlFor="much-less">Spent much less than my take-home pay</label>

      <input type="radio" value="little-less" id="little-less"
        onChange={(e) => setAnswer(e.target.value)} />
      <label htmlFor="little-less">Spent a little less than my take-home pay</label>

      <input type="radio" value="equal" id="equal"
        onChange={(e) => setAnswer(e.target.value)} />
      <label htmlFor="equal">Spent about equal to my take-home pay</label>

      <input type="radio" value="little-more" id="little-more"
        onChange={(e) => setAnswer(e.target.value)} />
      <label htmlFor="little-more">Spent a little more than my take-home pay</label>

      <input type="radio" value="much-more" id="much-more"
        onChange={(e) => setAnswer(e.target.value)} />
      <label htmlFor="much-more">Spent much more than my take-home pay</label>

    </form>
      <Link to={"/results"}>
        <button className="button">Next Step</button>
      </Link>
    </article>
  );
}

export default SpendingInfo;
