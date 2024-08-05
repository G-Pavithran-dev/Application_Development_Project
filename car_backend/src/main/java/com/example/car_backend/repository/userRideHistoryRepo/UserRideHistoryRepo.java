package com.example.car_backend.repository.userRideHistoryRepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.*;
import com.example.car_backend.model.userRideHistory.UserRideHistory;

import jakarta.transaction.Transactional;
@Repository
public interface UserRideHistoryRepo extends JpaRepository<UserRideHistory,Integer> {

    @Query("select e from UserRideHistory e where e.bookRide.Id=?1 and e.status=?2")
    UserRideHistory findDriverVyId(int id,String status);
    @Query("select e from UserRideHistory e where e.userDetails.email=?1 and e.status=?2")
    List<UserRideHistory> findUserRideHistoryByEmail(String email,String status);
    @Query("select e from UserRideHistory e where e.bookRide.Id=?1 and e.userDetails.email=?2")
    UserRideHistory findRides(int id,String email);
    @Transactional
@Modifying
    @Query("delete from UserRideHistory e where e.userDetails.email=?1 and e.bookRide.Id=?2")
    void cancelRide(String email,int id);
} 
