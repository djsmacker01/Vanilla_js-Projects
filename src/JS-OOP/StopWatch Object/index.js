function StopWatch() {
    let startTime, endTime, running,  duration = 0
    
    this.start = function () {
        if (running) 
            throw new Error('StopWatch is already running')
        running = true
        startTime = new Date()
  
    console.log('Starting....')
    }

    this.stop = function () {
        if (!running)
            throw new Error('StopWatch has not started.')
        running = false
        // paused = true
        endTime = new Date()
        const elapse = (endTime.getTime() - startTime.getTime()) / 1000
        duration += elapse
        
    }
    // this.pause = function () { 
    //   if (!running)
    //         throw new Error('StopWatch has not started.')
    //     running = false
    //     paused = true
    //     endTime = new Date()
    //     const elapse = (endTime.getTime() - startTime.getTime()) / 1000
    //     duration += elapse


    
    this.reset = function () { 
        startTime = null
        endTime = null
        running = false
        // paused = false
        duration = 0
        console.log('Reset stopwatch')
    }
    Object.defineProperty(this, 'duration', {
        get: function () { 
            return duration
        }
 })
}

const newStopWatch = new StopWatch()
