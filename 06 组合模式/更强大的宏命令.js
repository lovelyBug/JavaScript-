var MacroCommand = function() {
  return {
    commandList: [],
    add: function(command) {
      this.commandList.push(command)
    },
    execute: function() {
      for(let i = 0; i < this.commandList.length; i++) {
        const command = this.commandList[i]
        command.execute()
      }
    }
  }
}

var closeDoorCommand = {
  execute: function() {
    console.log('关门')
  }
}

var openPcCommand = {
  execute: function() {
    console.log('开电脑')
  }
}

var openQQCommand = {
  execute: function() {
    console.log('登录QQ')
  }
}



var macroCommand1 = MacroCommand()
macroCommand1.add(closeDoorCommand)
macroCommand1.add(openQQCommand)
macroCommand1.add(openQQCommand)

var openAcCommand = {
  execute: function() {
    console.log('打开空调')
  }
}

var openTvCommand = {
  execute: function() {
    console.log('打开电视')
  }
}

var openSoundCommand = {
  execute: function() {
    console.log('打开音响')
  }
}

var macroCommand2 = MacroCommand()
macroCommand2.add(openTvCommand)
macroCommand2.add(openSoundCommand)

var macroCommand = MacroCommand()
macroCommand.add(openAcCommand)
macroCommand.add(macroCommand1)
macroCommand.add(macroCommand2)

macroCommand.execute()
