//혼합 이넘
enum Answer {
    Yes = 'Yes',
    No = 1
}

// 다양한 이넘 속성 값
enum Authorization {
    User,
    Admin,
    SuperAdmin = User + Admin,
    God = "abc".length
}

//const 이넘 -> 데이터 양을 줄일 수 있음
const enum logLevel {
    Debug = 'Debug',
    Info = 'Info',
    Error = 'Error'
}

var appLevel = logLevel.Error;