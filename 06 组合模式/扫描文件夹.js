var Folder = function(name) {
  this.name = name
  this.parent = null
  this.files = []
}

Folder.prototype.add = function(file) {
  this.files.push(file)
  file.parent = this
}

Folder.prototype.scan = function() {
  console.log('开始扫描文件: ' + this.name)
  for(let i = 0, file, files = this.files; file = files[i]; i++) {
    file.scan()
  }
}

Folder.prototype.remove = function() {
  // 根节点外的游离节点
  if(!this.parent) {
    return
  }
  for(let files = this.parent.files, l = files.length - 1; l >= 0; l--) {
    var file = files[l]
    if(file === this) {
      files.splice(1, 1)
    }
  }
}

var File = function(name) {
  this.name = name
  this.parent = null
}

File.prototype.add = function() {
  throw new Error('文件下面不能再添加文件')
}

File.prototype.scan = function() {
  console.log('开始扫描文件：' + this.name)
}

File.prototype.remove = function() {
  // 根节点外的游离节点
  if(!this.parent) {
    return
  }
  for(let files = this.parent.files, l = files.length - 1; l >= 0; l--) {
    var file = files[l]
    if(file === this) {
      files.splice(1, 1)
    }
  }
}

var folder = new Folder('学习资料')
var folder1 = new Folder('JavaScript')
var folder2 = new Folder('jQuery')

var file1 = new File('JavaScript设计模式与开发实践')
var file2 = new File('精通jQuery')
var file3 = new File('重构与模式')

folder1.add(file1)
folder2.add(file2)

folder.add(folder1)
folder.add(folder2)
folder.add(file3)

var folder3 = new Folder('Node.js')
var file4 = new File('深入浅出Node.js')

folder3.add(file4)

var file5 = new File('JavaScript语言精髓与编程实践')

folder.add(folder3)
folder.add(file5)

folder1.remove()

folder.scan()
