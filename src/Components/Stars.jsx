const Stars = ({ rating, setRating }) => {
  
  const stars = x => {
    const starArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        starArray.push(
          <span
            onClick={() => setRating(i)}
            className="fs-4"
            key={i}
            style={style}
          >
            &#9733;
          </span>
        );
      } else {
        starArray.push(
          <span
            onClick={() => setRating(i)}
            className="fs-4"
            key={i}
            style={style}
          >
            &#9734;
          </span>
        );


  
      }
    }

    return starArray;
  };
  return <div>{stars(rating)}</div>;
};

const style = {
  color: 'rgb(245, 164, 66)',
  cursor: 'pointer',
};

Stars.defaultProps = {
  setRating: () => {},
};

export default Stars;
