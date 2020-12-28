package com.b3labs.svudde.springboot.utilities;

import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

public class Util {

    public static Integer generateRandomUserId() {
        Random rand = new Random();

        // Generate random integers in range 0 to 999
        int randomUserId = ThreadLocalRandom.current().nextInt();
        return Integer.valueOf(randomUserId);
    }
}
