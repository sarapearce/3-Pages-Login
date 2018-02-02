// import { injectReducer } from '../../store/reducers';

export default store => ({
  /*  Async getComponent is only invoked when route matches   */
  path: 'login(/:key)',
  // childRoutes: [
  //   {
  //     path: 'recover',
  //     getComponent(nextState, cb) {
  //       const RecoverPassword = require('./containers/RecoverPassword').default; // eslint-disable-line global-require
  //
  //
  //       cb(null, RecoverPassword);
  //     },
  //   },
  // ],
  getComponent(nextState, cb) {
    const Login = require('./containers/Login').default;
    /*  Return getComponent   */
    cb(null, Login);
  },
});
