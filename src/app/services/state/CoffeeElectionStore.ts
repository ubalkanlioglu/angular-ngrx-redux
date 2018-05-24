import { Injectable } from "@angular/core";
import { Store } from "../../abstract/store";
import { CoffeeElectionState } from "../../models/CoffeeElectionState";

@Injectable()
export class CoffeeElectionStore extends Store<CoffeeElectionState> {
    constructor() {
        super(new CoffeeElectionState());
    }

    addVote(candidate: { name: string, votes: number }): void {
        this.setState({
            ...this.state,
            candidates: this.state.candidates.map(c => {
                if (c === candidate) {
                    return { ...c, votes: c.votes + 1 };
                }
                return c;
            })
        });
    }

    addCandidate(name: string): void {
        // this.state.candidates.push({ name: name, votes: 0 });
        this.setState({
            ...this.state,
            candidates: [...this.state.candidates, { name: name, votes: 0 }]
        });
    }
}