import axios from "axios";


export default {
  getRandomTeam: function() {
    return axios.get("https://randomuser.me/api/?results=30");
  },

};
