const FormatTime = (time) => {
    const timeformated = new Date(time);
    return `${timeformated.getDate()}-${
        timeformated.getMonth() + 1
    }-${timeformated.getFullYear()}`;
};

export default FormatTime;
