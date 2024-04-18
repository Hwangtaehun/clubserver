const Container = (props: {title: string; children: React.ReactElement}) => {
    const {title, children} = props
    
    return (
        <div style={{background: 'red'}}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    )
}

const Parent = (): JSX.Element => {
    return (
        <Container title="Hello">
            <p>이부분이 배경색으로 둘러쌰여 있습니다.</p>
        </Container>
    )
}

export default Parent