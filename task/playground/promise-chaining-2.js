require('../src/db/mongoose')

const Task = require('../src/models/task')

Task.findByIdAndDelete('5e533cc841e180738a21a3f4').then((task) => {

           console.log(task)

           return Task.countDocuments({completed: false})

    }).then((result) => {

       console.log(result)

    }).catch((e) => {

            console.log(e)

})

const deleteTaskAndCount = async(id) => {

    await Task.findByIdAndDelete(id)

    const count = await Task.countDocuments({completed: false})

    return count

}

deleteTaskAndCount('5e533cc841e180738a21a3f4').then((count)=> {

   console.log(count)

}).catch((e)=> {

   console.log(e)


})
