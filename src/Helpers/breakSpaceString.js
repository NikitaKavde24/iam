const breakSpaceString = (str) => {
  let words = str.trim().split(" ");
  console.log(str);
  if (words.length < 2) {
    return str;
  } else {
    // return  + "" + words.slice(1).join(" ");
    return (
      <>
        <div>{words[0]}</div>
        <div>{words.slice(1).join(" ")}</div>
      </>
    );
  }
};

export default breakSpaceString;
