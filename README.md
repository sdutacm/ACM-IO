# ACM 入门之输入输出

在开始做 ACM 时，会面临一个输入输出数据的问题，ACM 里的输入输出数据和平时写的程序不大一样。下面详解 ACM 有关输入输出的问题。

## 一、输入：

### 1、只有一组测试数据

这时候是最简单的了，请看题目 [SDUT 1000](http://acm.sdut.edu.cn/onlinejudge2/index.php/Home/Index/problemdetail/pid/1000)。

C 代码：

```c
#include <stdio.h>
int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    printf("%d\n", a + b);
    return 0;
}
```

C++ 代码：

```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << a + b << endl;
    return 0;
}
```

### 2、有多组测试数据，直到读至输入文件结尾为止

这时需要用到 `while(scanf("%d", &n) != EOF)` 或 `while(cin >> n)`，请看题目 [SDUT 1010](http://acm.sdut.edu.cn/onlinejudge2/index.php/Home/Index/problemdetail/pid/1010)。

C 代码：

```c
#include <stdio.h>

int main() {
    int a, b;
    while(scanf("%d %d", &a, &b) != EOF) {
        printf("%d\n", a + b);
    }
    return 0;
}
```

说明：`scanf` 函数返回值就是读出的变量个数，如：`scanf(“%d %d”, &a, &b);` 如果只有一个整数输入，返回值是 1，如果有两个整数输入，返回值是 2，如果一个都没有，则返回值是 -1。EOF 是一个预定义的常量，等于 -1。

C++ 代码：

```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b;
    while(cin >> a >> b) {
        cout << a + b << endl;
    }
    return 0;
}
```

### 3、在开始的时候输入一个 N，接下来是 N 组数据

请看题目 [SDUT 1011](http://acm.sdut.edu.cn/onlinejudge2/index.php/Home/Index/problemdetail/pid/1011)。

C 代码：

```c
#include <stdio.h>

int main() {
    int n, i;
    int a, b;
    scanf("%d", &n);
    for(i = 0; i < n; i++) {
        scanf("%d %d", &a, &b);
        printf("%d\n", a + b);
    }
    return 0;
}
```

或者

```c
#include <stdio.h>

int main() {
    int n, i;
    int a, b;
    scanf("%d", &n);
    while(n--) {
        scanf("%d %d", &a, &b);
        printf("%d\n", a + b);
    }
    return 0;
}
```

C++ 代码：

```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b, n;
    cin >> n;
    while(n--) {
        cout << a + b << endl;
    }
    return 0;
}
```

### 4、输入不说明有多少组数据，但以某个特殊输入为结束标志

请看题目 [SDUT 1012](http://acm.sdut.edu.cn/onlinejudge2/index.php/Home/Index/problemdetail/pid/1012)，这个题目是以 `0 0` 代表输入结束。

C 代码：

```c
#include <stdio.h>

int main() {
    int a, b;
    while(scanf("%d %d", &a, &b) && (a || b)) {
        printf("%d\n", a + b);
    }
    return 0;
}
```

C++ 代码：

```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b;
    while(cin >> a >> b && (a || b)) {
        cout << a + b << endl;
    }
    return 0;
}
```

### 5、还有一种是前几种的组合

请看题目 [SDUT 1013](http://acm.sdut.edu.cn/onlinejudge2/index.php/Home/Index/problemdetail/pid/1013)。

C 代码：

```c
#include <stdio.h>

int main() {
    int n, sum, a;
    while(scanf("%d", &n) && n) {
        sum = 0;
        while(n--) {
            scanf("%d", &a);
            sum += a;
        }
        printf("%d\n", sum);
    }
    return 0;
}
```

C++ 代码：

```cpp
#include <iostream>

using namespace std;

int main() {
    int n, sum, a;
    while(cin >> n && n) {
        sum = 0;
        while(n--) {
            cin >> a;
            sum += a;
        }
        cout << sum << endl;
    }
    return 0;
}
```

6、输入字符串。

输入是一整行的字符串的：

C 语法：

```c
char buf[20];

gets(buf);
```

C++ 语法：

如果用 `string buf;` 来保存：

```cpp
getline(cin, buf);
```

如果用 `char buf[255];` 来保存：

```cpp
cin.getline(buf, 255);
```

在多个字符串之间用一个或多个空格分隔：

```cpp
scanf("%s %s", str1, str2);
```

字符串之间用回车符作分隔，使用 `gets` 函数：

```cpp
gets(str1);
gets(str2);
```

通常情况下，接受短字符用 `scanf` 函数，接受长字符用 `gets` 函数。

而 `getchar` 函数每次只接受一个字符，经常 `c = getchar()` 这样来使用。

`getline` 是一个函数，它可以接受用户的输入的字符，直到已达指定个数，或者用户输入了特定的字符。它的函数声明形式（函数原型）如下：

```cpp
istream& getline(char line[], int size, char endchar = '\n');
```

不用管它的返回类型，来关心它的三个参数：

- `char line[]`： 就是一个字符数组，用户输入的内容将存入在该数组内。
- `int size` : 最多接受几个字符？用户超过 `size` 的输入都将不被接受。
- `char endchar` :当用户输入 `endchar` 指定的字符时，自动结束。默认是回车符。


结合后两个参数， `getline` 可以方便地实现： 用户最多输入指定个数的字符，如果超过，则仅指定个数的前面字符有效，如果没有超过，则用户可以通过回车来结束输入。

```cpp
char name[4];
cin.getline(name, 4, '\n');
```

由于 `endchar` 默认已经是 `'\n'`，所以后面那行也可以写成：

```cpp
cin.getline(name, 4);
```

最后需要说明的是，C++ 的输入输出流用起来比较方便，但速度比 C 要慢得多。在输入输出量巨大时，用 C++ 很可能超时，应采用 C 的输入输出。

## 二、输出：

输出有不同的格式要求，不注意的话经常会出现 `Presentation Error`，而且 PC2 很多时候还判断不出来输出格式错误，就简单的判为 `Wrong Answer`，所以输出格式一定要注意。

### 1、一组输出接着一组输出，中间没有空行

这也是最简单的，请看题目 [SDUT 1010](http://acm.sdut.edu.cn/onlinejudge2/index.php/Home/Index/problemdetail/pid/1010)。

C 代码：

```c
#include <stdio.h>

int main() {
    int a, b;
    while(scanf("%d %d", &a, &b) != EOF) {
        printf("%d\n", a + b);
    }
    return 0;
}
```

每输出一组结果换行就可以了。

### 2、一组接着一组，每一组后面有一空行

请看题目 [SDUT 1016](http://acm.sdut.edu.cn/onlinejudge2/index.php/Home/Index/problemdetail/pid/1016)。

C 代码：

```c
#include <stdio.h>

int main() {
    int a, b;
    while(scanf("%d %d", &a, &b) != EOF) {
        printf("%d\n\n", a + b);
    }
    return 0;
}
```

每输出一组结果后输出两个换行就可以了。


### 3、一组接着一组，每两组之间有一个空行

注意与前一种区分开，请看题目 [SDUT 1017](http://acm.sdut.edu.cn/onlinejudge2/index.php/Home/Index/problemdetail/pid/1017)。

```c
#include <stdio.h>

int main() {
    int n, m, sum, a;
    int i;
    scanf("%d", &n);
    for(i = 0; i < n; i++) {
        scanf("%d", &m);
        sum = 0;
        while(m--) {
            scanf("%d", &a);
            sum += a;
        }
        printf("%d\n", sum);
        if (i != n - 1)
        printf("\n");
    }
    return 0;
}
```

判断是否到达最后一组测试数据了，如果不是最后一组测试数据就多输出一个换行。
