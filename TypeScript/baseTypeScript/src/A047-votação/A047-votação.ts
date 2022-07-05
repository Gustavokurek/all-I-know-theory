type votationOption = {
  option: string;
  numberOfVotes: number;
};

class Votation {
  private _votationOptions: votationOption[] = [];
  constructor(public datails: string) {}

  addVotationOption(votationOption: votationOption): void {
    this._votationOptions.push(votationOption);
  }
  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes++;
  }

  get votationOptions(): votationOption[] {
    return this._votationOptions;
  }
}

class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation) {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.datails);
      for (const votationOptions of votation.votationOptions) {
        console.log(votationOptions.option, votationOptions.numberOfVotes);
      }
      console.log('####');
      console.log('');
    }
  }
}

const votation1 = new Votation('qual seu time favorito');
votation1.addVotationOption({ option: 'flamengo', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'Sao paulo', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'cruzeiro', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'coritiba', numberOfVotes: 0 });

votation1.vote(3);
votation1.vote(2);
votation1.vote(0);
votation1.vote(2);
votation1.vote(1);
votation1.vote(1);

const votation2 = new Votation('Serie favorita ?');
votation2.addVotationOption({ option: 'Breaking Bad', numberOfVotes: 0 });
votation2.addVotationOption({ option: 'Game of Thrones', numberOfVotes: 0 });
votation2.addVotationOption({
  option: 'How i met your mother',
  numberOfVotes: 0,
});

votation2.vote(0);
votation2.vote(2);
votation2.vote(0);
votation2.vote(2);
votation2.vote(1);
votation2.vote(1);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);

votationApp.showVotations();
