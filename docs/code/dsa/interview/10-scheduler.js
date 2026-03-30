class Scheduler {
  constructor(limit) {
    this.limit = limit; // 最大并发数
    this.runningCount = 0; // 当前正在运行的任务数
    this.queue = []; // 等待执行的任务队列
  }

  add(taskCreator) {
    // add 方法返回一个 Promise，外部通过 .then 或 await 接收结果
    return new Promise((resolve, reject) => {
      // 1. 把任务包装一下，存入队列
      // 我们存入的是一个函数，这样可以控制它什么时候“开始”
      const task = async () => {
        try {
          this.runningCount++;
          const result = await taskCreator();
          resolve(result); // 任务成功，通知外部
        } catch (err) {
          reject(err); // 任务失败，通知外部
        } finally {
          this.runningCount--;
          this.next(); // 关键：跑完一个，尝试拉起下一个
        }
      };

      this.queue.push(task);
      this.next(); // 尝试执行
    });
  }

  next() {
    // 只要还有空位，且队列里还有人，就一直叫号
    while (this.runningCount < this.limit && this.queue.length > 0) {
      const task = this.queue.shift();
      task(); // 执行任务（注意这里不需要 await，我们要的是并发启动）
    }
  }
}