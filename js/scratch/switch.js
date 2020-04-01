// switch statements
const styles = {
    traditional: 1,
    modern: 2,
    postModern: 3,
    futuristic: 4
};
const style = styles.traditional;
switch (style) {
    case styles.traditional:
        console.log(style);
        break;
    case styles.modern:
        console.log(style);
        break;
    case styles.postModern:
        console.log(style);
        break;
    case styles.futuristic:
        console.log(style);
        break;
    default:
        throw new Error('Style not known: '+style);
}
