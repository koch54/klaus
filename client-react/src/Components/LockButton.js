import React from 'react'

export default class LockButton extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.openPopup();
    }

    render() {
        return(
            <img id='lock-img' onClick={this.handleClick} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjYiIGhlaWdodD0iMjYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNMTA1Ljg0NjE1LDBjLTE0LjYyNjIsMCAtMjcuMjYyNjIsNi4wNzI3MiAtMzUuMTQ0MjMsMTUuOTE4MjdjLTcuODgxNjEsOS44NDU1NSAtMTEuMTYzNDYsMjIuNjExMTggLTExLjE2MzQ2LDM2LjM4NDYydjcuMjM1NThoMTkuODQ2MTV2LTcuMjM1NThjMCwtMTAuNDM5OSAyLjU4NDEzLC0xOC42NTc0NSA2LjgyMjEyLC0yMy45ODA3N2M0LjIzNzk4LC01LjMyMzMxIDEwLjAwMDYsLTguNDc1OTYgMTkuNjM5NDIsLTguNDc1OTZjOS42NjQ2NywwIDE1LjQwMTQ0LDIuOTcxNzYgMTkuNjM5NDIsOC4yNjkyM2M0LjIzNzk4LDUuMjk3NDcgNi44MjIxMiwxMy42MTgzOSA2LjgyMjEyLDI0LjE4NzV2Ny4yMzU1OGgxOS44NDYxNXYtNy4yMzU1OGMwLC0xMy44NTA5NiAtMy40ODg1OCwtMjYuNzQ1NzkgLTExLjM3MDE5LC0zNi41OTEzNWMtNy44ODE2MSwtOS44NDU1NSAtMjAuMzM3MTQsLTE1LjcxMTU0IC0zNC45Mzc1LC0xNS43MTE1NHpNNTkuNTM4NDYsNjYuMTUzODVjLTEwLjk1NjczLDAgLTE5Ljg0NjE1LDguODg5NDIgLTE5Ljg0NjE1LDE5Ljg0NjE1djY2LjE1Mzg1YzAsMTAuOTU2NzMgOC44ODk0MiwxOS44NDYxNSAxOS44NDYxNSwxOS44NDYxNWg5Mi42MTUzOGMxMC45NTY3MywwIDE5Ljg0NjE1LC04Ljg4OTQyIDE5Ljg0NjE1LC0xOS44NDYxNXYtNjYuMTUzODVjMCwtMTAuOTU2NzMgLTguODg5NDIsLTE5Ljg0NjE1IC0xOS44NDYxNSwtMTkuODQ2MTV6TTEwNS44NDYxNSw5OS4yMzA3N2M3LjMxMzEsMCAxMy4yMzA3Nyw1LjkxNzY3IDEzLjIzMDc3LDEzLjIzMDc3YzAsNC44ODQwMSAtMi42NjE2Niw5LjA3MDMxIC02LjYxNTM4LDExLjM3MDE5djE1LjA5MTM1YzAsMy42NDM2MyAtMi45NzE3Niw2LjYxNTM4IC02LjYxNTM4LDYuNjE1MzhjLTMuNjQzNjMsMCAtNi42MTUzOCwtMi45NzE3NiAtNi42MTUzOCwtNi42MTUzOHYtMTUuMDkxMzVjLTMuOTUzNzIsLTIuMjk5ODggLTYuNjE1MzgsLTYuNDg2MTggLTYuNjE1MzgsLTExLjM3MDE5YzAsLTcuMzEzMSA1LjkxNzY3LC0xMy4yMzA3NyAxMy4yMzA3NywtMTMuMjMwNzd6Ij48L3BhdGg+PC9nPjwvZz48L2c+PC9zdmc+"></img>
        )
    }
}