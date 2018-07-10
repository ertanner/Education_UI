// actions: {
//   login({ commit }, creds) {
//     commit(LOGIN); // show spinner
//     return new Promise(resolve => {
//       setTimeout(() => {
//         localStorage.setItem("token", "JWT");
//         commit(LOGIN_SUCCESS);
//         resolve();
//       }, 1000);
//     });
//   },
//   logout({ commit }) {
//     localStorage.removeItem("token");
//     commit(LOGOUT);
//   }
// }
