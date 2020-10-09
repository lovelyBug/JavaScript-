var setCommand = function(button, func) {
  button.onClick = function() {
    func()
  }
}

var MenuBar = {
  refresh: function() {
    console.log('刷新菜单界面')
  }
}

var RefreshMenuBarCommand = function(receiver) {
  return function() {
    receiver.refresh()
  }
}

var refreshMenuBarCommand = RefreshMenuBarCommand(MenuBar)

setCommand(button1, refreshMenuBarCommand)