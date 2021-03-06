CREATE TABLE `student` (
                           `student_id` int NOT NULL AUTO_INCREMENT,
                           `name` varchar(255) NOT NULL,
                           `study_centre_id` int DEFAULT NULL,
                           `course_id` int DEFAULT NULL,
                           `app_serial_no` int DEFAULT NULL,
                           `application_no` int NOT NULL,
                           `enrollment_no` varchar(255) NOT NULL,
                           `image` varchar(255) DEFAULT NULL,
                           `degree` varchar(255) DEFAULT NULL,
                           `ba_groupid` int DEFAULT NULL,
                           `course_name` varchar(255) DEFAULT NULL,
                           `study_centre` varchar(255) DEFAULT NULL,
                           `code_no` int DEFAULT NULL,
                           `father_name` varchar(255) DEFAULT NULL,
                           `door_no` varchar(255) DEFAULT NULL,
                           `street` varchar(255) DEFAULT NULL,
                           `village` varchar(255) DEFAULT NULL,
                           `mandal` varchar(255) DEFAULT NULL,
                           `district_state` varchar(255) DEFAULT NULL,
                           `pincode` int DEFAULT NULL,
                           `phone` varchar(255) DEFAULT NULL,
                           `email_id` varchar(255) DEFAULT NULL,
                           `medium` varchar(255) DEFAULT NULL,
                           `second_language` varchar(255) DEFAULT NULL,
                           `dob` date DEFAULT NULL,
                           `gender` varchar(255) DEFAULT NULL,
                           `martial_status` varchar(255) DEFAULT NULL,
                           `nationality` varchar(255) DEFAULT NULL,
                           `religion` varchar(255) DEFAULT NULL,
                           `caste` varchar(255) DEFAULT NULL,
                           `residential_area` varchar(255) DEFAULT NULL,
                           `qualifying_exam` varchar(255) DEFAULT NULL,
                           `university` varchar(255) DEFAULT NULL,
                           `registration_no` varchar(255) DEFAULT NULL,
                           `group_subjects` varchar(255) DEFAULT NULL,
                           `ous_education` varchar(255) DEFAULT NULL,
                           `max_marks` int DEFAULT NULL,
                           `marks_obtained` int DEFAULT NULL,
                           `percentage_marks` float DEFAULT NULL,
                           `location` varchar(255) DEFAULT NULL,
                           `signature` varchar(255) DEFAULT NULL,
                           `hallticket_no` varchar(255) DEFAULT NULL,
                           `eligibility_marks` int DEFAULT NULL,
                           `cal_fees` int DEFAULT NULL,
                           `print_count` int DEFAULT '0',
                           `is_approve` tinyint NOT NULL DEFAULT '0',
                           `month_Year` varchar(255) DEFAULT NULL,
                           `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                           `updated_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                           `mobile_No` varchar(20) DEFAULT NULL,
                           PRIMARY KEY (`student_id`),
                           UNIQUE KEY `unique_mobile_No` (`mobile_No`),
                           KEY `FKikn8ryr55ykufa3g09xjoxe50` (`study_centre_id`),
                           CONSTRAINT `FKikn8ryr55ykufa3g09xjoxe50` FOREIGN KEY (`study_centre_id`) REFERENCES `study_centres` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `study_centres` (
                                 `id` int NOT NULL AUTO_INCREMENT,
                                 `name` varchar(255) NOT NULL,
                                 `course_id` int DEFAULT NULL,
                                 `code_no` int NOT NULL,
                                 `door_no` varchar(255) DEFAULT NULL,
                                 `street` varchar(255) DEFAULT NULL,
                                 `village` varchar(255) DEFAULT NULL,
                                 `mandal` varchar(255) DEFAULT NULL,
                                 `district_state` varchar(255) DEFAULT NULL,
                                 `pin_code` int DEFAULT NULL,
                                 `phone` varchar(255) DEFAULT NULL,
                                 `created_by` int DEFAULT NULL,
                                 `created_on` datetime DEFAULT NULL,
                                 `modified_on` datetime NOT NULL,
                                 `modified_by` int NOT NULL,
                                 `is_active` tinyint(1) NOT NULL DEFAULT '1',
                                 `is_delete` tinyint(1) NOT NULL DEFAULT '0',
                                 `user_Id` varchar(20) DEFAULT NULL,
                                 `password` varchar(20) DEFAULT NULL,
                                 PRIMARY KEY (`id`),
                                 UNIQUE KEY `uniqueUserID` (`user_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
