
export const DashboardComponent = {
  bindings: {
    config: '=',
    url: '=',
  },
  controller: function ctrl($window) {
    this.version = $window.angular.version
  },
  template: require('./dashboard.html').toString(),
}
