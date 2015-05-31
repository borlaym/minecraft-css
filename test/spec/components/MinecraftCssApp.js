'use strict';

describe('MinecraftCssApp', function () {
  var React = require('react/addons');
  var MinecraftCssApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    MinecraftCssApp = require('components/MinecraftCssApp.js');
    component = React.createElement(MinecraftCssApp);
  });

  it('should create a new instance of MinecraftCssApp', function () {
    expect(component).toBeDefined();
  });
});
