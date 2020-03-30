import { PipeTransform, Pipe } from '@angular/core';
import { Poll } from 'src/app/shared/poll.model';


@Pipe({
    name:'PollFilter'
})

export class PollFilterPipe implements PipeTransform{
    transform(Polls: Poll[], PollsterID:number, StartDate: Date, EndDate: Date ): Poll[]{
        var FilteredPolls: Poll[] = Polls;

        if (PollsterID>0){
            FilteredPolls = Polls.filter(poll => poll.PollsterID==PollsterID);
        }
        else{
        FilteredPolls=Polls
        }
        if (StartDate){
            FilteredPolls = FilteredPolls.filter(poll => new Date(poll.Fieldwork)>=new Date(StartDate))
        }
        if (EndDate){
            FilteredPolls = FilteredPolls.filter(poll => new Date(poll.Fieldwork)<=new Date(EndDate))
        }

    return FilteredPolls;
    }
}