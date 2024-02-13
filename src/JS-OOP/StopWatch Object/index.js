function StopWatch() {
    let startTime, endTime, running, duration = 0
    
    this.start = function () {
        if (running) 
            throw new Error('StopWatch is already running')
        running = true
        startTime = new Date()
    }

    this.stop = function () {
        if (!running)
            throw new Error('StopWatch has not started.')
        running = false
        endTime = new Date()
        const elapse = (endTime.getTime() - startTime.getTime()) / 1000
        duration += elapse
        
    }
    this.pause = function () { 

    }
    this.reset = function () { 

    }

}