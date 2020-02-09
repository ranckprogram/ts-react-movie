import * as React from 'react';


interface IProps {
    name: string,
    age?: number
}

class Hello extends React.Component<IProps, any>{
    constructor(props: any) {
        super(props)
    }
    public render() {
        const { name } = this.props
        return (
            <div>
                hello world
                {name}
            </div>
        )
    }
}

export default Hello