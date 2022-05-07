/**
 * ts에게 타입에 대한 정의를 해주는 파일. js 함수에 대한 정의를 작성한다.
 * js 패키지를 ts에 적용할 때, 타입 명시 파일이 필요하다.
 */

interface Config {
    url: string;
}

declare module "myPackage" {
    function init(config: Config): boolean;
    function exit(code: number): number;
}