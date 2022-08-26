setTimeout(() => {
  console.log(7);
}, 0);

process.nextTick(() => {
  console.log(6);
});

Promise.resolve().then(() => {
  console.log(5);
});

const fn1 = () => {
  return new Promise((resolve, reject) => {
    console.log(1);
    resolve();
    console.log(2);
  });
};

async function fn2() {
  console.log(3);
  await fn1();
  console.log(4);
}

fn2();
