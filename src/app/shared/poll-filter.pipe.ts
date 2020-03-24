import { PipeTransform, Pipe } from '@angular/core';
import { Poll } from 'src/app/shared/poll.model';
import { PollingService } from 'src/app/shared/polling.service';

@Pipe({
    name:'PollFilter'
})

export class PollFilterPipe implements PipeTransform{
    transform(Polls: Poll[], PollsterID:number ):Poll[]{
        if (!Polls || !PollsterID || PollsterID==0){
            return Polls;
        }
        return Polls.filter(poll => poll.PollsterID==PollsterID);
    }
}