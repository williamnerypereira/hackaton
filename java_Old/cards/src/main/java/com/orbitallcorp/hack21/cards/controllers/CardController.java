package com.orbitallcorp.hack21.cards.controllers;

import com.orbitallcorp.hack21.cards.domains.Card;
import com.orbitallcorp.hack21.cards.services.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class CardController {
    @Autowired
    private CardService cardService;

    @PostMapping // Envia dados
    public ResponseEntity<Card> save(@RequestBody Card card){
        Card savedCard = cardService.save(card);

        return new ResponseEntity(savedCard, HttpStatus.CREATED);
    }

    @GetMapping // Retorna dados
    public ResponseEntity<List<Card>> findAll(){
      //  Object cardService;
        List<Card> cards = cardService.findAll();
        return ResponseEntity.ok(cards);
    }
    /*
    @GetMapping("/cards/{id}")
    public ResponseEntity findByID(@PathVariable Long id) {
        List<Card> cards = cardService.findOne(Integer);
        return ResponseEntity.ok(cards);
    }*/
}
