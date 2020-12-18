/**
 * 打乱一个列表的顺序
 * @param list
 */
export const shuffle = (list: Array<string>): Array<string> => {
  return [...list]
    .map((item): [string, number] => [item, Math.random()])
    .sort((a, b) => a[1] - b[1])
    .map((item) => item[0])
}

/**
 * 随机一个颜色
 */
export const randomColor = () =>
  shuffle([
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'lime',
    'green',
    'cyan',
    'blue',
    'geekblue',
    'purple',
  ]).shift()
