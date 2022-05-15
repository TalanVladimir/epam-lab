interface iJob {
  id: number;
  priority: number;
}

class JobRunner {
  jobArray: iJob[] = [];

  constructor(jobCount: number) {
    this.generateJobList(jobCount);
  }

  run() {
    this.sortByPriority();
    this.runJobs();
  }

  private generateJobList(jobCount: number) {
    for (let i = 0; i < jobCount; i++) {
      const obj = { id: i, priority: Math.random() };
      this.jobArray.push(obj);
    }
  }

  private sortByPriority() {
    this.jobArray = this.jobArray.sort(
      (left: iJob, right: iJob) => right.priority - left.priority,
    );
    return this;
  }

  private runJobs() {
    for (let i = 0; i < this.jobArray.length; i++) {
      this.runProcess(i + 1, this.jobArray[i]);
    }
  }

  private runProcess(numb: number, job: iJob) {
    console.log(
      `job nr: ${numb} job id: ${job.id} job priority: ${job.priority}`,
    );
  }
}

new JobRunner(10000).run();
