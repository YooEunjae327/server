import EventEmitter from 'events'

const custom_event = new EventEmitter()

custom_event.on('tomato', function()
{
    console.log('이벤트 콜')
})

custom_event.emit('tomato')

// import { readFile } from 'fs';

// readFile('edu/text.txt', 'utf8', function(err, data){
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log(data);
//     }
// })

