export interface Mapper<I, O> {
    map(input: I): O
}

export interface ListMapper<I, O> extends Mapper<Array<I>, Array<O>>{}

export class ListMapper<I, O> implements ListMapper<I, O>{
    
    constructor(private mapper: Mapper<I, O>) { }

    map(input: I[]): O[] {
        return input.map(i => {
            return this.mapper.map(i);
        });
    }
}