function StopWatch(){
    let startTime,endTime,running,duration=0;
    this.start = function(){
        if(running){
            throw new Error(`Stop watch already started`);
        }
        running=true;
        startTime=new Date();
    };
    this.end = function(){
        if(!running){
            throw new Error(`Stop watch didn't started`);
        }
        running=false;
        endTime=new Date();
        let seconds = (endTime.getTime()-startTime.getTime())/1000;
        duration+=seconds;
    };
    this.restart = function(){
        running = false;
        duration = 0;
        startTime= null;
        endTime = null;
    }
    Object.defineProperty(this,'duration',{
        get:function(){
            return duration;
        }
    })
}
console.log('Hello world');
StopWatch.start();
