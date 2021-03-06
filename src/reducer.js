export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  token: null,
  //token:
  //"BQD5XhrjEP1vtF5DD966BRqvhxSx-l4MJyqKZ8z70ZjyQ-0rqp0HXBP2FWWq07CjwkLvMVmN1OPwfkq-8cojeZIvCqAwu13qutnqXByoQvqinwldYYFZwpv0stpa732VsmdoPlMseq8tne5cWkmDmm7qkCJhVkSTZnlgHEFTfFjoQRIssliw",
};

const reducer = (state, action) => {
  console.log("ACION>>>", action);

  //Action =>type,[payload]-->here below the payload is user in "action.user"

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
