import fench from "./fench";
function popular() {
  return fench("movie/popular");
}
const movie = {
  popular,
};
export default movie;
