import * as React from 'react';
// import { Button } from 'antd';
import Button from 'antd/es/button';

interface IProps {
    name: string,
    age?: number
}

interface IState {
    greeting: string
}

class Hello extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
    }


    public readonly state: Readonly<IState> = {
        greeting: ''
    }

    public handleClick(data: number) {
        console.log(data)
    }

    public render() {
        const { name } = this.props
        return (
            <div>
                <button onClick={() => this.handleClick(12)}>button</button>
                hello world
                {name}
                <Button type="primary">save</Button>
            </div>
        )
    }
}

export default Hello;