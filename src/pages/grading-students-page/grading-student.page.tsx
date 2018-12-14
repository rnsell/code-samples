import * as React from "react";

interface IGradingStudentPageState {
  grades: Number[];
}

export class GradingStudentPage extends React.Component<
  {},
  IGradingStudentPageState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      grades: []
    };
  }

  appendGradeToArray(newGrade: Number) {
    const { grades } = this.state;
    this.setState({ grades: [...grades, newGrade] });
  }

  render() {
    return <p> Hello World</p>;
  }
}
